
    fetch('section_top_profile.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('insertedContent').innerHTML = data;
        });
