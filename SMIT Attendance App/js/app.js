import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
  
  // for Realtime Database
  import {
    getDatabase,
    set,
    ref,
    onValue, // onChildAdded, onChildRemoved, onChildChanged, on, get,
    push,
    update,
  } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

  // initialize firebase functions
  const auth = getAuth();
  const database = getDatabase();
  
  const signup = () => {
    let username = document.getElementById("username").value; 
    let email = document.getElementById("signup-email").value;
      let password = document.getElementById("signup-password").value; 
    createUserWithEmailAndPassword(auth, email, password)
      .then((resolve) => {
        alert("successfully Signup");
        console.log(resolve);
        let userId = auth.currentUser.uid;
        console.log(userId);
        let usersReference = ref(database, "users/" + userId );  //ref func needed to make reference 
        let usersObj = {
          username: username,
          email: email,
          password: password,
          admin: "false"
        };
        set(usersReference, usersObj);  //set function
        windows.location.href='./login.html'
      })
      .catch((reject) => {
        alert("Signup failed!", reject);
      });
  };
  
  let signup_btn = document.getElementById("signup-btn");
  if (signup_btn) {
    signup_btn.addEventListener("click", signup);
  } else {
    const login = () => {
      let email = document.getElementById("login-email");
      let password = document.getElementById("login-password");
      signInWithEmailAndPassword(auth, email.value, password.value)
        .then((resolve) => {
          alert("successfully Login");
          const dt = new Date();

          let userId = auth.currentUser.uid;
          update(ref(database, 'users/'+userId),{lastLogin :dt,})
          let usernameRef = ref(database, "users/" + userId);  //parameters of ref--> 1)reference jaha se data get krna h, 2) what we need to get
          onValue(usernameRef, (data)=> { //get data from database
              let userData = data.val().username;
              let userDataEmail = data.val().email;
              let userDataPassword = data.val().password;
              let isAdmin = data.val().admin;
              console.log(userData, userDataEmail, userDataPassword);
              // to give data in a <p> tag with id=username
              // document.getElementById("username").innerHTML = userData; 
              if (isAdmin === "false") {
                // Redirect to classes.html
                window.location.href = "./user.html";
              } else {
                // Redirect to dashboard.html for admins
                window.location.href = "./admin.html";
              } 
          })
        })
        .catch((reject) => {
          alert(reject);
        });
    };
  
    let login_btn = document.getElementById("login-btn");
    login_btn.addEventListener("click", login);
  }





// Sign Out

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

// -------------------------------------------------

const classList = [];
const studentList = [];

function addClass() {
    const classTimings = document.getElementById("classTimings").value;
    const schedule = document.getElementById("scheduleOfClasses").value;
    const teacherName = document.getElementById("teacherName").value;
    const sectionName = document.getElementById("sectionName").value;
    const courseName = document.getElementById("courseName").value;
    const batchNumber = document.getElementById("batchNumber").value;

    const newClass = {
        classTimings,
        schedule,
        teacherName,
        sectionName,
        courseName,
        batchNumber,
    };
    classList.push(newClass);
    displayClassList();
}

function addStudent() {
  const studentName = document.getElementById("name").value;
  const fatherName = document.getElementById("father-name").value;
  const rollNumber = document.getElementById("roll-number").value;
  const contactNumber = document.getElementById("contact-number").value;
  const cnicNumber = document.getElementById("cnic-number").value;
  const studentPicture = document.getElementById("picture").value;
  const studentCourse = document.getElementById("course-name").value;
  const studentClass = document.getElementById("assigned-class").value;
  const newStudent = {
    studentName,
    fatherName,
    rollNumber,
    contactNumber,
    cnicNumber,
    studentPicture,
    studentCourse,
    studentClass,
};

studentList.push(newStudent);
displayStudentList();
}

function displayClassList() {
  const classListElement = document.getElementById("classList");
  classListElement.innerHTML = "";
  for (const cls of classList) {
    const listItem = document.createElement("li");
    listItem.textContent = `Class Timings: ${cls.classTimings}, Schedule: ${cls.schedule}, Teacher: ${cls.teacherName}`;
    classListElement.appendChild(listItem);
}
}

function displayStudentList() {
  const studentListElement = document.getElementById("studentList");
  studentListElement.innerHTML = "";
  
  for (const student of studentList) {
      const listItem = document.createElement("li");
      listItem.textContent = `Name: ${student.studentName}, Roll Number: ${student.rollNumber}, Course: ${student.studentCourse}`;
      studentListElement.appendChild(listItem);
  }
  }



  // --------------------------------------------------

  var rollV, nameV, genderV, sectionV;

    function readForm() {
      rollV = document.getElementById("roll-number").value;
      nameV = document.getElementById("name").value;
      // genderV = document.getElementById("gender").value;
      sectionV = document.getElementById("assigned-class").value;
      console.log(rollV, nameV, addressV, genderV);
    }

    document.getElementById("add-student").onclick = function () {
      readForm();
    
      firebase
        .database()
        .ref("student/" + rollV)
        .set({
          rollNo: rollV,
          name: nameV,
          // gender: genderV,
          section: sectionV,
        });
      alert("Data Created");
      document.getElementById("roll-number").value = "";
      document.getElementById("name").value = "";
      // document.getElementById("gender").value = "";
      document.getElementById("assigned-class").value = "";
    };
    