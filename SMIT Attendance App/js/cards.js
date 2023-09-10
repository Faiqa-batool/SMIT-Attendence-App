// Function to open the pop-up
function openPopup() {
    const popup = document.getElementById("attendancePopup");
    popup.style.display = "block";
  }
  
  // Function to close the pop-up
  function closePopup() {
    const popup = document.getElementById("attendancePopup");
    popup.style.display = "none";
  }
  
  // Event listener for the "Take Attendance" button
  document.getElementById("openPopup").addEventListener("click", openPopup);
  
  // Event listener for the "Close" button
  document.getElementById("closePopup").addEventListener("click", closePopup);
  
  // Event listener for the class select dropdown
  document.getElementById("classSelect").addEventListener("change", () => {
    // Fetch and display student data based on the selected class (you'll need to implement this)
    // Example: Display a list of students for the selected class
  });
  
  // Event listener for the "Submit" button
  document.getElementById("submitAttendance").addEventListener("click", () => {
    const studentID = document.getElementById("studentID").value;
    const attendance = document.getElementById("attendance").value;
    
    // Process attendance data (e.g., send it to the database)
    // You can access the selected class and student ID here
    const selectedClass = document.getElementById("classSelect").value;
  
    // Example: Send the data to the database or perform further processing
    console.log("Class:", selectedClass);
    console.log("Student ID:", studentID);
    console.log("Attendance:", attendance);
  
    // Close the pop-up after submission
    closePopup();
  });
  