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
    <div className="p-10">
      <h1 className="text-5xl">Book List</h1>
      <ul className="mt-5 underline text-blue-800">
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
