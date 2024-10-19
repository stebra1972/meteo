class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

class Library {
    constructor() {
        this.books = [];
        this.init();
    }

    init() {
        document.getElementById("newBookButton").addEventListener("click", () => {
            document.getElementById("newBookForm").style.display = "block";
        });

        document.getElementById("addBookButton").addEventListener("click", () => {
            this.addBookToLibrary();
        });

        document.getElementById("onlyTableButton").addEventListener("click", () => {
            document.getElementById("newBookForm").style.display = "none";
        });
    }

    addBookToLibrary() {
        const title = document.getElementById("title").value.trim();
        const author = document.getElementById("author").value.trim();
        const pages = document.getElementById("pages").value.trim();
        const read = document.getElementById("read").value.trim();

        // Validation check
        if (!title || !author || !pages || !read) {
            alert('All fields are required. Please fill in each field.');
            return;
        }

        const book = new Book(title, author, pages, read);
        this.books.push(book);
        this.displayBooks();
    }

    displayBooks() {
        const tableBody = document.querySelector("#libraryTable tbody");
        tableBody.innerHTML = ""; // Clear the table body

        this.books.forEach((book, index) => {
            const row = tableBody.insertRow();
            const titleCell = row.insertCell(0);
            const authorCell = row.insertCell(1);
            const pagesCell = row.insertCell(2);
            const readCell = row.insertCell(3);
            const deleteCell = row.insertCell(4);
            const toggleReadCell = row.insertCell(5);

            titleCell.textContent = book.title;
            authorCell.textContent = book.author;
            pagesCell.textContent = book.pages;
            readCell.textContent = book.read;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", () => {
                this.deleteBook(index);
            });
            deleteCell.appendChild(deleteButton);

            const toggleReadButton = document.createElement("button");
            toggleReadButton.textContent = "Toggle Read";
            toggleReadButton.addEventListener("click", () => {
                this.toggleReadStatus(index);
            });
            toggleReadCell.appendChild(toggleReadButton);
        });
    }

    deleteBook(index) {
        this.books.splice(index, 1);
        this.displayBooks();
    }

    toggleReadStatus(index) {
        this.books[index].read = this.books[index].read === "yes" ? "no" : "yes";
        this.displayBooks();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const library = new Library();
});