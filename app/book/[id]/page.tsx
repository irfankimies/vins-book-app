
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
  const res = await fetch(
    `https://fakerapi.it/api/v2/books?_quantity=1&_seed=${params.id}`,
    {
      cache: "no-store", // SSR
    }
  );
  const data = await res.json();
  const book: Book = data.data[0];

  return (
    <div style={{ padding: 20 }}>
      <h1>{book.title}</h1>
      <img src={book.image} alt={book.title} width={150} />
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
        <strong>Published:</strong> {book.published}
      </p>
      <p>
        <strong>Publisher:</strong> {book.publisher}
      </p>
    </div>
  );
}
