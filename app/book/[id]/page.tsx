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
  image: string;
};

type Props = {
  params: { id: string };
};

export default async function BookDetailPage({ params }: Props) {
  let book: Book;
  try {
    const res = await fetch(
      `https://fakerapi.it/api/v1/books?_quantity=1&_seed=${params.id}`,
      {
        cache: "no-store", // SSR
      }
    );

    if (!res.ok) throw new Error("Failed to fetch data");
    const data = await res.json();
    if (!data.data[0]) throw new Error("Book not found");
    book = data.data[0];
  } catch (error: any) {
    console.error(error);
    const errorMessage =
      error.message === "Failed to fetch data"
        ? "Error: Unable to fetch data. Please check your network connection."
        : error.message === "Book not found"
        ? "Error: Book not found"
        : "An unexpected error occurred.";

    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl text-red-600">{errorMessage}</h1>
        <Link
          href="/book"
          className="mt-4 inline-block text-blue-800 underline"
        >
          Back to Book List
        </Link>
      </div>
    );
  }

  const formattedDate = format(new Date(book.published), "dd/MM/yyyy");

  return (
    <div className="p-10 w-full mx-auto">
      <h1 className="py-5 text-3xl font-bold underline">{book.title}</h1>
      <img
        src={`https://picsum.photos/seed/${params.id}/480/640`}
        alt={book.title}
        className="h-[450px] w-[700px] rounded-lg mb-4 object-cover"
      />
      <div className="mt-15 text-2xl w-[750px] flex flex-col gap-5">
        <p>
          <strong>Author:</strong> {book.author}
        </p>
        <p>
          <strong>Genre:</strong> {book.genre}
        </p>
        <p>
          <strong>Description:</strong> {book.description}
        </p>
        <p>
          <strong>ISBN:</strong> {book.isbn}
        </p>
        <p>
          <strong>Published:</strong> {formattedDate}
        </p>
        <p>
          <strong>Publisher:</strong> {book.publisher}
        </p>
      </div>
    </div>
  );
}
