const toggleMenuOpen = () => document.body.classList.toggle("open");

// Define the logout function
function logout() {
    signOut(auth)
        .then(() => {
            // Redirect to the "signup.html" page after signing out
            window.location.href = "signup.html";
        })
        .catch((error) => {
            // Handle any errors that occur during sign out here
            console.error("Sign-out error:", error);
        });
}

// Add a click event listener to the "logout-btn" element
document.getElementById("logout-btn").addEventListener("click", logout);
