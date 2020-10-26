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
   const studentList = document.getElementsByClassName("student-list").innerHtML = "";
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
   const numOfPages = Math.ceil(list.length/9)
   const linkList = document.getElementsByClassName('link-list').innerHtML = "";
   for (let i=1; i<= numOfPages.length; i++) {
      let button = `<li> <button type = "button">${i}</button></li>`;
      linkList.insertAdjacentHTML('beforeend')
   }
   let buttonFirst = document.querySelector('button');
      buttonFirst.className='active';

   linkList.addEventListener ('click', e => {
      let selected = e.target
       for (let i=0; i < numOfPages; i++)
         if (e.target.tagName === 'BUTTON')
         selected.className.remove = '';
         e.target.className = 'active';
   });
}


// Call functions
showPage();
addPagination();
