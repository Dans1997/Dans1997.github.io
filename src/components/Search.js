import React from 'react';
import { useState } from 'react';
import SearchBar from './SearchBar';

const Search = () => {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredBooks = filterPosts(books, searchQuery);

    return (
        <div>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <ul>
                {filteredBooks.map((book) => (
                    <li key={book.id}>{book.volumeInfo.title}</li>
                ))}
            </ul>
        </div>
    );
};

const filterPosts = (books, query) => {
    if (!query) {
        return books;
    }

    return books.filter((book) => {
        const bookName = book.volumeInfo.title.toLowerCase();
        return bookName.includes(query);
    });
};

const books = [
    { 
        id: '1', 
        "volumeInfo": {
            "title": "Hooked",
            "subtitle": "How to Build Habit-Forming Products",
            "authors": [
                "Nir Eyal"
            ],
            "publisher": "publisher",
            "publishedDate": "publishedDate",
            "description": "description",
            "industryIdentifiers": [
            {
                "type": "industryIdentifiers",
                "identifier": "industryIdentifiers"
            }
            ],
            "pageCount": 200,
            "dimensions": {
                "height": "1",
                "width": "1",
                "thickness": "1"
            },
            "printType": "printType",
            "mainCategory": "mainCategory",
            "categories": [
                "string"
            ]
        }
    },
    { 
        id: '2', 
        "volumeInfo": {
            "title": "Originals",
            "subtitle": "How Non-Conformists Move The World",
            "authors": [
                "Adam Grant"
            ],
            "publisher": "publisher",
            "publishedDate": "publishedDate",
            "description": "description",
            "industryIdentifiers": [
            {
                "type": "industryIdentifiers",
                "identifier": "industryIdentifiers"
            }
            ],
            "pageCount": 400,
            "dimensions": {
                "height": "1",
                "width": "1",
                "thickness": "1"
            },
            "printType": "printType",
            "mainCategory": "mainCategory",
            "categories": [
                "string"
            ]
        }
    }
];
  
export default Search;