import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, BookPlus } from "lucide-react";
import { useForm } from "react-hook-form";
import { useAddBookMutation } from "@/redux/api/bookApi";
import { Toaster, toast } from "sonner";
import Loading2 from "@/components/layout/loading/loading2";

const AddBook = () => {
  const navigate = useNavigate();
  const [addBook, {isLoading}] = useAddBookMutation(undefined);

  type Inputs = {
    title: string;
    author: string;
    genre: string;
    isbn: string;
    copies: number;
    description?: string;
  };

  const {
    register,
    handleSubmit,
    reset,
    // watch,
    // formState: {},
  } = useForm<Inputs>();

  const onSubmit = handleSubmit(async (data: Inputs) => {
    const FData = {
      available: data.copies > 0 ? true : false,
      author: data.author,
      title: data.title,
      copies: data.copies,
      description: data.description,
      isbn: data.isbn,
      genre: data.genre,
    };

    if (FData) {
      try {
        // Call the 'editBook' trigger with the required arguments
        const data = await addBook({ body: FData }).unwrap();
        console.log(data);

        if (data.success) {
          toast.success("Book Added successfully");
          reset();
        }
      } catch (err) {
        console.error("Failed to Add the book:", err);
      }
    }
  });

  return (
    <div className="w-fit mx-auto">
      <Toaster richColors />

      <div className="space-y-6 container py-8 max-w-2xl">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-gray-700">
              Add New Book
            </h1>
            <p className="text-muted-foreground">
              Add a new book to the library collection
            </p>
          </div>
        </div>

        {/* Form */}
        <Card className="border-border/50 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BookPlus className="h-5 w-5 text-primary" />
              <span>Book Information</span>
            </CardTitle>
            <CardDescription>
              Fill in the details for the new book
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    {...register("title")}
                    placeholder="Enter book title"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="author">Author *</Label>
                  <Input
                    id="author"
                    {...register("author")}
                    placeholder="Enter author name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="genre">Genre *</Label>
                  <Input
                    id="genre"
                    {...register("genre")}
                    placeholder="e.g., Fiction, Science, Romance"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="isbn">ISBN *</Label>
                  <Input
                    id="isbn"
                    {...register("isbn")}
                    placeholder="978-0-123456-78-9"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="copies">Number of Copies</Label>
                  <Input
                    id="copies"
                    {...register("copies", { valueAsNumber: true })}
                    type="number"
                    min="1"
                    placeholder="1"
                    required
                  />
                </div>

                <div className="space-y-2 col-span-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    {...register("description")}
                    placeholder="Enter a brief description of the book (optional)"
                    rows={4}
                  />
                </div>
              </div>

              <div className="flex gap-4 w-fit mx-auto">
                {isLoading ? (
                  <Loading2 />
                ) : (
                  <Button
                    type="submit"
                    className="shadow-soft hover:scale-105 active:scale-100 transition-transform duration-300"
                  >
                    Submit
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddBook;
