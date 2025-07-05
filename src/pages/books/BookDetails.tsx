import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, BookOpen, Calendar, Edit, Trash2 } from "lucide-react";
import {
  useDeleteBookMutation,
  useGetSingleBookQuery,
} from "@/redux/api/bookApi";
import Loading from "@/components/layout/loading/loading";
import { toast, Toaster } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const BookDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: books, isLoading } = useGetSingleBookQuery(id);

  const [deleteBook] = useDeleteBookMutation(undefined);

  const deleteBooks = async (id: string) => {
    if (id) {
      try {
        // Call the 'editBook' trigger with the required arguments
        const data = await deleteBook({ body: { id: id } }).unwrap();

        if (data.success) {
          toast.success("Book Added successfully");
        }
      } catch (err) {
        console.error("Failed to Add the book:", err);
      }
    }
  };
  if (isLoading) {
    return (
      <div className="w-fit h-full mx-auto mt-40 mb-40">
        <Loading />
      </div>
    );
  }

  if (!books) {
    return (
      <div className="container py-8">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-4">Book Not Found</h1>
          <p className="text-muted-foreground mb-4">
            The book you're looking for doesn't exist or has been removed.
          </p>
          <Button onClick={() => navigate("/allBooks")}>Back to Books</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-fit mx-auto">
      <Toaster />
      <div className="container py-8 max-w-4xl">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="flex-1 mb-5">
            <h1 className="text-xl font-bold text-slate-700">
              {books?.data?.title}
            </h1>
            <p className="text-muted-foreground">by {books?.data?.author}</p>
          </div>
        </div>

        {/* Book Details */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Main Info */}
          <div className="md:col-span-2">
            <Card className="border-border/50 shadow-soft h-full justify-evenly">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Book Information</span>
                  <Badge
                    className={
                      books.data.available
                        ? "ml-2 bg-green-600"
                        : "ml-2 bg-red-600"
                    }
                    variant={books?.data?.available ? "default" : "destructive"}
                  >
                    {books?.data?.available ? "Available" : "Unavailable"}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">
                      Author
                    </h4>
                    <p className="text-lg font-medium">{books?.data?.author}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">
                      Genre
                    </h4>
                    <p className="text-lg font-medium">{books?.data?.genre}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">
                      ISBN
                    </h4>
                    <p className="font-mono text-lg">{books?.data?.isbn}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">
                      Copies Available
                    </h4>
                    <p className="text-lg font-medium">{books?.data?.copies}</p>
                  </div>
                </div>

                {books?.data?.description && (
                  <>
                    <Separator />
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">
                        Description
                      </h4>
                      <p className="text-foreground leading-relaxed">
                        {books?.data?.description}
                      </p>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Side Info */}
          <div className="space-y-4">
            {/* Availability Status */}
            <Card className="border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Status
                    </span>
                    <Badge
                      className={
                        books.data.available
                          ? "ml-2 bg-green-600"
                          : "ml-2 bg-red-600"
                      }
                      variant={
                        books?.data?.available ? "default" : "destructive"
                      }
                    >
                      {books?.data?.available ? "Available" : "Out of Stock"}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Copies
                    </span>
                    <span className="font-semibold">{books?.data?.copies}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <Link to={`/editBook/${books?.data._id}`}>
                        <Edit className="mr-1 h-3 w-3" />
                        Edit
                      </Link>
                    </Button>

                    {books?.data.available && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="flex-1"
                      >
                        <Link to={`/borrowBook/${books?.data._id}`}>
                          <BookOpen className="mr-1 h-3 w-3" />
                          Borrow
                        </Link>
                      </Button>
                    )}

                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete Book</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to delete "{books.data.title}
                            "? This action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => deleteBooks(books.data._id)}
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                          >
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Metadata */}
            <Card className="border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  Record Info
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  {books?.data?.createdAt && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Added</span>
                      <span>
                        {new Date(books?.data?.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  )}
                  {books?.data?.updatedAt && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Updated</span>
                      <span>
                        {new Date(books?.data?.updatedAt).toLocaleDateString()}
                      </span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
