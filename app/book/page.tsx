
import Link from "next/link";

type Book = {
  id: number;
  title: string;
  author: string;
};

export default async function BookListPage() {
  const res = await fetch("https://fakerapi.it/api/v1/books?_quantity=10", {
    cache: "no-store", // forces SSR (like getServerSideProps)
  });
  const data = await res.json();
  const books: Book[] = data.data;

  return (
    <div style={{ padding: 20 }}>
      <h1>Book List</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link href={`/book/${book.id}`}>
              {book.title} by {book.author}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
