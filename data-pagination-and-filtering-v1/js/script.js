/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage (list, page) {
    const startIndex = (page * 9) - 9;
    const endIndex = page * 9; 
    const studentList = document.querySelector('student-list')
    studentList.innerHTML='';
    for (let i = 0; i < studentList.length; i++){
       if (i >= startIndex && i< endIndex) {
           studentList[i].style.display = 'block';
       const html= `<li class="student-item cf">
           <div class="student-details">
             <img class="avatar" src="https://randomuser.me/api/portraits/women/25.jpg" alt="Profile Picture">
             <h3>Ethel Dean</h3>
             <span class="email">ethel.dean@example.com</span>
           </div>
           <div class="joined-details">
             <span class="date">Joined 12-15-2005</span>
           </div>
         </li>`;
       }
       else {
          list[i].style.display = 'none';
       }
    }
    }
  
 
 /*
 Create the `addPagination` function
 This function will create and insert/append the elements needed for the pagination buttons
 */
 function addPagination(list){
    const numOfPages = Math.ceil(42/9)
    const linkList = document.querySelector('link-list')
    linkList.innerHTML='';
    for (let i=1; i<= numOfPages; i++) {
       let button = `<li> <button type = "button">${i}</button></li>`;

       linkList.insertAdjacentHTML('beforeend',button);
    }
    let buttonFirst = document.querySelector('button');
       buttonFirst.className='active';
 
     linkList.addEventListener ('click', (e) => {
       let selected = e.target;
          if (selected.tagName === 'BUTTON') {
          let active = document.querySelector('.active');
          active.className = "";
          selected.className = 'active';
          showPage(list,selected.textContent);
          }
    });
 }
 
 
 // Call functions
 showPage(1);
 addPagination();
 
