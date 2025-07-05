import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Save } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useEditBookDetailsMutation } from "@/redux/api/bookApi";
import { useNavigate, useParams } from "react-router";
import { Toaster, toast } from "sonner";
import Loading2 from "@/components/layout/loading/loading2";

const EditBooks = () => {
  type Inputs = {
    title: string;
    author: string;
    genre: string;
    isbn: string;
    copies: number;
    description: string;
  };

  const {
    register,
    handleSubmit,
    reset,
    // watch,
    // formState: {},
  } = useForm<Inputs>();

  const { id } = useParams();
  const navigate = useNavigate();

  const [editBook, { isLoading }] = useEditBookDetailsMutation();

  const onSubmit = handleSubmit(async (data: Inputs) => {
    function removeEmptyValues<T extends Record<string, unknown>>(
      obj: T
    ): Partial<T> {
      return Object.fromEntries(
        Object.entries(obj).filter(([, value]) => {
          return value !== undefined && value !== null && value !== "" && value;
        })
      ) as Partial<T>;
    }

    const cleaned = removeEmptyValues(data);

    if (id) {
      try {
        // Call the 'editBook' trigger with the required arguments
        const data = await editBook({ _id: id, body: cleaned }).unwrap();

        if (data.success) {
          toast.success("Book Added successfully");
          reset();
        }
      } catch (err) {
        console.error("Failed to update the book:", err);
      }
    }
  });

  return (
    <div className="w-fit mx-auto mt-20 mb-20">
      <Toaster richColors />
      <div className="flex items-center space-x-4">
        <Button variant="outline" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="font-bold text-gray-700 text-2xl">Edit Book</h1>
          <p className="text-muted-foreground">Update book information</p>
        </div>
      </div>
      <Card className="border-border/50 shadow-soft container py-8 max-w-2xl mt-5">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Save className="h-5 w-5 text-primary" />
            <span>Book Information</span>
          </CardTitle>
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
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="author">Author *</Label>
                <Input
                  id="author"
                  {...register("author")}
                  placeholder="Enter author name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="genre">Genre *</Label>
                <Input
                  id="genre"
                  {...register("genre")}
                  placeholder="e.g., Fiction, Science, Romance"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="isbn">ISBN *</Label>
                <Input
                  id="isbn"
                  {...register("isbn")}
                  placeholder="978-0-123456-78-9"
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
  );
};

export default EditBooks;
