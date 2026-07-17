
        const roles = ["Web Developer", "Software Engineer"];
        const roleElement = document.querySelector(".role");
        let roleIndex = 0;
        let charIndex = 0;

        function typeRole() {
            if (charIndex < roles[roleIndex].length) {
                roleElement.textContent += roles[roleIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeRole, 100); // Adjust typing speed
            } else {
                setTimeout(deleteRole, 1500); // Pause before deleting
            }
        }

        function deleteRole() {
            if (charIndex > 0) {
                roleElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(deleteRole, 50); // Adjust deleting speed
            } else {
                roleIndex = (roleIndex + 1) % roles.length; // Loop through roles
                setTimeout(typeRole, 500); // Pause before typing next role
            }
        }

        // Start typing effect
        typeRole();

