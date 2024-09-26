function showSanic() {
            // Afficher l'image
            var img = document.createElement('img');
            img.src = 'images/sanic.gif';
            img.style.position = 'absolute';
            img.style.top = '0';
            img.style.right = '0';
            img.style.width = '500px';
            document.body.appendChild(img);

            // Jouer le son
            var audio = new Audio('sounds/sanicsound.mp3');
            audio.play();

            // Disparaître après 2 secondes
            setTimeout(function() {
                img.remove();
            }, 7500);
}
