document.addEventListener('DOMContentLoaded', function() {

    document.addEventListener('keydown', function(event) {
        const preventDefaultKeys = [
            { key: 'F12' },
            { key: 'I', ctrlKey: true, shiftKey: true },
            { key: 'J', ctrlKey: true, shiftKey: true },
            { key: 'U', ctrlKey: true },
            { key: 'C', ctrlKey: true, shiftKey: true },
            { key: 'S', ctrlKey: true },
            { key: 'P', ctrlKey: true },
            { key: 'F', ctrlKey: true },
        ];

        const isPreventDefaultKey = preventDefaultKeys.some(
            (k) => event.key === k.key && (!k.ctrlKey || event.ctrlKey) && (!k.shiftKey || event.shiftKey)
        );

        if (isPreventDefaultKey) {
            event.preventDefault();
        }
    });

   /* document.addEventListener('contextmenu', function(event) {
        event.preventDefault();
    });*/
});