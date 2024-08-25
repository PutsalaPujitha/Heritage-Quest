document.addEventListener('DOMContentLoaded', function() {
    function handleStateDetails() {
        const hash = window.location.hash.substring(1);
        const sections = document.querySelectorAll('section');
        
        sections.forEach(function(section) {
            if (section.id === hash) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }
    
    window.addEventListener('load', handleStateDetails);
    window.addEventListener('hashchange', handleStateDetails);
});
