import Link from "next/link";
import { format } from "date-fns";

type Book = {
  id: number;
  title: string;
  author: string;
  genre: string;
  description: string;
  isbn: string;
  published: string;
  publisher: string;
};

export default async function BookListPage() {

  const res = await fetch("https://fakerapi.it/api/v1/books?_quantity=10", {
    cache: "no-store", // forces SSR (like getServerSideProps)
  });
  const data = await res.json();
  const books: Book[] = data.data;
 
  return (
    <div className="p-10 flex flex-col items-center mt-10">
      <h1 className="text-5xl underline">Book List</h1>
      <table className="mt-15 w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Title</th>
            <th className="border p-2">Author</th>
            <th className="border p-2">Genre</th>
            <th className="border p-2 min-w-80">Description</th>
            <th className="border p-2">ISBN</th>
            <th className="border p-2">Published</th>
            <th className="border p-2">Publisher</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {books.map((book) => (
            <tr key={book.id}>
              <td className="border p-2">
                <Link
                  href={`/book/${book.id}`}
                  className="text-blue-800 underline"
                >
                  {book.title}
                </Link>
              </td>
              <td className="border p-2">{book.author}</td>
              <td className="border p-2">{book.genre}</td>
              <td className="border p-2">{book.description}</td>
              <td className="border p-2">{book.isbn}</td>
              <td className="border p-2">
                {format(new Date(book.published), "dd/MM/yyyy")}
              </td>
              <td className="border p-2">{book.publisher}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
