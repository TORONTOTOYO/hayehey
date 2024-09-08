import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faGear, faBoxOpen, faUser, faQuestionCircle, faEnvelope, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement
} from 'chart.js';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from './firebase'; // Replace with your Firebase config path
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const ProfileDashboard = () => {
  const [messageData, setMessageData] = useState({ daily: [], weekly: [], monthly: [], yearly: [] });
  const [userId, setUserId] = useState('');
  const [username, setUsername] = useState(''); // State for username
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const navigate = useNavigate(); // Initialize useNavigate hook for navigation

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid); // Set the logged-in user's ID
        fetchData(user.uid); // Fetch data for the logged-in user
        fetchUsername(user.uid); // Fetch username
      }
    });

    // Handle window resizing
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener('resize', handleResize);

    return () => {
      unsubscribe();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const fetchData = async (userId) => {
    const messagesRef = collection(db, 'messages');
    const q = query(messagesRef, where('recipientId', '==', userId)); // Query only messages for the logged-in user
    const querySnapshot = await getDocs(q);
    const messages = querySnapshot.docs.map((doc) => ({
      createdAt: doc.data().createdAt.toDate(),
    }));

    // Aggregate data
    const daily = Array.from({ length: 24 }, (_, i) =>
      messages.filter((msg) => msg.createdAt.getHours() === i).length
    );
    const weekly = Array.from({ length: 7 }, (_, i) =>
      messages.filter((msg) => msg.createdAt.getDay() === i).length
    );
    const monthly = Array.from({ length: 12 }, (_, i) =>
      messages.filter((msg) => msg.createdAt.getMonth() === i).length
    );
    const yearly = messages.reduce((acc, msg) => {
      const year = msg.createdAt.getFullYear();
      acc[year] = (acc[year] || 0) + 1;
      return acc;
    }, {});

    setMessageData({ daily, weekly, monthly, yearly: Object.values(yearly) });
  };

  const fetchUsername = async (userId) => {
    const userDoc = doc(db, 'users', userId); // Assuming user data is stored in 'users' collection
    const userSnapshot = await getDoc(userDoc);
    if (userSnapshot.exists()) {
      setUsername(userSnapshot.data().username); // Set the username
    }
  };

  // Function to generate dynamic descriptions
  const generateDescription = (data, type) => {
    if (type === 'daily') {
      const maxCount = Math.max(...data.daily);
      return `Daily Messages: The chart shows the number of messages received per hour throughout the day. The peak hour is ${data.daily.indexOf(maxCount)}:00, with ${maxCount} messages.`;
    }
    if (type === 'weekly') {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const maxCount = Math.max(...data.weekly);
      return `Weekly Messages: This pie chart displays the distribution of messages received on each day of the week. The busiest day is ${days[data.weekly.indexOf(maxCount)]}, with ${maxCount} messages.`;
    }
    if (type === 'monthly') {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const maxCount = Math.max(...data.monthly);
      return `Monthly Messages: This line chart shows the number of messages received each month over the year. The month with the highest messages is ${months[data.monthly.indexOf(maxCount)]}, with ${maxCount} messages.`;
    }
    return 'No data available.';
  };

  const defaultStyles = {
    container: {
      background: 'linear-gradient(to bottom, #000b1e, #1c2b4f)',
      minHeight: '100vh',
      color: '#e0e0e0',
      fontFamily: "'VT323', monospace",
      padding: isMobile ? '10px' : '15px', // Reduced padding
    },
    header: {
      color: 'hsl(49, 98%, 60%)',
      textAlign: 'center',
      marginBottom: isMobile ? '5px' : '15px', // Reduced margin
      fontSize: isMobile ? '2em' : '3em', // Reduced font size for mobile
      margin: '25px',
      marginTop: '2rem'
    },
    chartWrapper: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: isMobile ? '5px' : '10px', // Reduced gap
      marginBottom: isMobile ? '5px' : '15px', // Reduced margin
      margin: '15px'
    },
    chartCard: {
      backgroundColor: '#1b2a3e',
      border: '2px solid #00ffff',
      borderRadius: isMobile ? '6px' : '8px', // Reduced border radius
      padding: isMobile ? '3px' : '8px', // Reduced padding
      color: '#e0e0e0',
      width: '100%',
      maxWidth: isMobile ? '80%' : '45%',
      height: isMobile ? '150px' : '250px', // Reduced height for mobile
      boxSizing: 'border-box',
      marginBottom: '50px', // Reduced margin
      fontSize: '1em',
    },
    chart: {
      width: '100%',
      height: '100%',
    },
    description: {
      width: '100%',
      textAlign: 'center',
      marginBottom: '5px', // Reduced margin
      fontSize: isMobile ? '0.6em' : '1em', // Reduced font size for mobile
    },
    backButton: {
      position: 'absolute',
      top: '10px',
      left: '10px',
      background: '#1b2a3e',
      border: 'none',
      borderRadius: '50%',
      padding: '10px',
      color: '#00ffff',
      cursor: 'pointer',
      fontSize: '0.75rem',
    },
  };

  return (
    <div style={defaultStyles.container}>
      <button style={defaultStyles.backButton} onClick={() => navigate('/dashboard')}>
        <FontAwesomeIcon icon={faArrowLeft} size="lg" />
      </button>
      <h2 style={defaultStyles.header}><a style={{textTransform: 'uppercase'}}>{username ? `${username}'s Dashboard` : 'User Dashboard'}</a></h2>

      {/* Daily Messages Bar Chart */}
      <div style={defaultStyles.chartWrapper}>
        <div style={defaultStyles.description}>
          <h3>Daily Messages</h3>
          <p>{generateDescription({ daily: messageData.daily }, 'daily')}</p>
        </div>
        <div style={defaultStyles.chartCard}>
          <Bar
            data={{
              labels: Array.from({ length: 24 }, (_, i) => i.toString()),
              datasets: [
                {
                  label: 'Messages per Hour',
                  data: messageData.daily,
                  backgroundColor: 'rgba(0, 255, 255, 0.5)',
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              scales: { y: { beginAtZero: true } },
            }}
            style={defaultStyles.chart}
          />
        </div>
      </div>

      {/* Weekly Messages Pie Chart */}
      <div style={defaultStyles.chartWrapper}>
        <div style={defaultStyles.description}>
          <h3>Weekly Messages</h3>
          <p>{generateDescription({ weekly: messageData.weekly }, 'weekly')}</p>
        </div>
        <div style={defaultStyles.chartCard}>
          <Pie
            data={{
              labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
              datasets: [
                {
                  label: 'Messages per Day',
                  data: messageData.weekly,
                  backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#00ff00', '#ff00ff', '#00ffff'],
                },
              ],
            }}
            options={{ maintainAspectRatio: false }}
            style={defaultStyles.chart}
          />
        </div>
      </div>

      {/* Monthly Messages Line Chart */}
      <div style={defaultStyles.chartWrapper}>
        <div style={defaultStyles.description}>
          <h3>Monthly Messages</h3>
          <p>{generateDescription({ monthly: messageData.monthly }, 'monthly')}</p>
        </div>
        <div style={defaultStyles.chartCard}>
          <Line
            data={{
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
              datasets: [
                {
                  label: 'Messages per Month',
                  data: messageData.monthly,
                  borderColor: '#00ffff',
                  backgroundColor: 'rgba(0, 255, 255, 0.5)',
                  fill: true,
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              scales: { y: { beginAtZero: true } },
            }}
            style={defaultStyles.chart}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
