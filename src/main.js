var myLibrary = [];
var dlg = document.getElementById("bookDialog");
;
//called from object instanciator
function Book(name, pages, read) {
    this.name = name;
    this.pages = pages;
    this.read = read;
}
//called from buttton
function addBookToLibrary(name, pages, read) {
    var book = new Book(name, pages, read);
    myLibrary.push(book);
    for (var _i = 0, myLibrary_1 = myLibrary; _i < myLibrary_1.length; _i++) {
        var bk = myLibrary_1[_i];
        console.log(bk);
    }
}
function showBookDialog() {
    if (dlg) {
        console.log(dlg);
        dlg.showModal();
    }
}
function closeBookDialog() {
    if (dlg) {
        dlg.close();
    }
}
