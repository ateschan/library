

const myLibrary: any = [];

const dlg = document.getElementById('bookDialog') as HTMLDialogElement;;


 
//called from object instanciator
function Book(name:string, pages: number, read: boolean) {
  this.name = name;
  this.pages = pages;
  this.read = read;
}

//called from buttton
function addBookToLibrary(name:string, pages: number, read: boolean) {
  const book = new Book(name, pages, read);
  myLibrary.push(book);
  for (const bk of myLibrary){
    console.log(bk)
  }
}

function showBookDialog(){
    if(dlg){
        console.log(dlg)
        dlg.showModal();
    }
}

function closeBookDialog(){
    if(dlg){
        dlg.close();
    }
}



export {};