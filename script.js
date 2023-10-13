

const myLibrary = [];

const dialog = document.querySelector('dialog');
const showDialog = document.querySelector('#showDialog');
const contentDiv = document.getElementById('contentDiv');

dialog.addEventListener('click',(event)=>{ // close dialog if clicked outside form
    if(event.target.id !== 'contentDiv'){
        dialog.close();
    }
})

contentDiv.addEventListener('click', (event)=>{
    event.stopPropagation()
})
    // input field values.
const confirmBtn = document.getElementById('confirm');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const readInput = document.getElementById('haveRead');

showDialog.addEventListener('click', ()=>{
    dialog.showModal();
    document.getElementById('form').reset();
    
})
// make the book object{}.
function Book(title, author, pages, haveRead){ 
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}
// add the book object to myArray[].
function addToLibrary(book){
    myLibrary.push(book);
}

const container = document.getElementById('container');

function displayBooks(){
    for (let i= myLibrary.length - 1; i < myLibrary.length; i++){

        const card = document.createElement('div');
        card.id = 'card' + i;
        card.classList.add('allCards');
        const bookTitle = document.createElement('p');
        bookTitle.id = 'title';
            bookTitle.textContent = `Title: ${myLibrary[i].title}`;
        const bookAuthor = document.createElement('p');
        bookAuthor.id = 'author';
            bookAuthor.textContent = `Author: ${myLibrary[i].author}`;
        const bookPages = document.createElement('p');
        bookPages.id = 'pages';
            bookPages.textContent = `Pages: ${myLibrary[i].pages}`;
        const ReadBtn = document.createElement('button');
        ReadBtn.classList.add('cardBtn');
        ReadBtn.id = 'haveRead';

        if(myLibrary[i].haveRead === true){
            ReadBtn.textContent = 'Have Read';
            ReadBtn.style.backgroundColor = 'green';
        } else{
            ReadBtn.textContent = 'Not Read';
            ReadBtn.style.backgroundColor = 'red';
        }
        const removeBtn = document.createElement('button');
        removeBtn.id = 'removeBtn';
        removeBtn.classList.add('cardBtn');
        removeBtn.textContent = 'REMOVE';

        // remove btn function.
        removeBtn.addEventListener('click',(e)=>{
            let parent = e.target.parentNode;
            parent.remove();
        })
        // change read status.
        ReadBtn.addEventListener('click',function(){
            const btnId = document.getElementById('haveRead');
            if(btnId.checked === true){
                btnId.checked = false;
                ReadBtn.textContent = 'Not Read';
                ReadBtn.style.backgroundColor = 'red';
            } else if(btnId.checked === false){
                btnId.checked = true;
                ReadBtn.textContent = 'Have Read';
                ReadBtn.style.backgroundColor = 'green';
            } 
        })
    
        container.appendChild(card);
    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.appendChild(ReadBtn);
    card.appendChild(removeBtn);
    }
}
    //Add dialog input into a new card then display it.
    confirmBtn.addEventListener('click', (event)=>{
        event.preventDefault();
        
        let addBook = new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.checked);

        addToLibrary(addBook);
        dialog.close();
        displayBooks();
    })

