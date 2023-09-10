// Function to mark attendance
function markAttendance() {
    const userID = document.getElementById("userID").value;
    const selectedAttendance = document.getElementById("attendance").value;
  
    // Check if userID is not empty
    if (!userID) {
      alert("Please enter your User ID.");
      return;
    }
  
    // Process attendance data (e.g., send it to the database)
    // Example: Send the data to the database or perform further processing
    console.log("User ID:", userID);
    console.log("Attendance:", selectedAttendance);
  
    // Optionally, clear the input fields
    document.getElementById("userID").value = "";
    document.getElementById("attendance").value = "absent"; // Set default to "Absent"
  }
  
  // Event listener for the "Mark Attendance" button
  document.getElementById("markAttendance").addEventListener("click", markAttendance);
  