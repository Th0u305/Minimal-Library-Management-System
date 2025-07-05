import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Calendar } from "lucide-react";
import type { IBook } from "@/types/bookTypes";
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

type bookS = {
  book: IBook;
};

const BorrowBookPage = ({ book }: bookS) => {
  const navigate = useNavigate();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" size="sm" className="hover:text-destructive">
          <BookOpen className="h-3 w-3" />
          Borrow
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center">
            Borrow Book
          </AlertDialogTitle>
          <AlertDialogDescription>
            <div className="container py-8 max-w-2xl">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => navigate(-1)}
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  <div>
                    <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                      Borrow Book
                    </h1>
                    <p className="text-muted-foreground">
                      Complete the borrowing process
                    </p>
                  </div>
                </div>

                {/* Book Info */}
                <Card className="border-border/50 shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{book.title}</span>
                      <Badge variant="default">Available</Badge>
                    </CardTitle>
                    <CardDescription>
                      by {book.author} • {book.genre}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div>
                        <span className="text-sm text-muted-foreground">
                          ISBN
                        </span>
                        <p className="font-mono">{book.isbn}</p>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">
                          Available Copies
                        </span>
                        <p className="font-semibold text-lg">{book.copies}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Borrow Form */}
                <Card className="border-border/50 shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <span>Borrowing Details</span>
                    </CardTitle>
                    <CardDescription>
                      Specify how many copies you want to borrow and the return
                      date
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form
                      // onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="quantity">Quantity *</Label>
                          <Input
                            id="quantity"
                            name="quantity"
                            type="number"
                            min="1"
                            max={book.copies}
                            // value={formData.quantity}
                            // onChange={handleChange}
                            required
                          />
                          <p className="text-xs text-muted-foreground">
                            Maximum: {book.copies} cop
                            {book.copies > 1 ? "ies" : "y"}
                          </p>
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="dueDate"
                            className="flex items-center space-x-2"
                          >
                            <Calendar className="h-4 w-4" />
                            <span>Due Date *</span>
                          </Label>
                          <Input
                            id="dueDate"
                            name="dueDate"
                            type="date"
                            // value={formData.dueDate}
                            // onChange={handleChange}
                            min={
                              new Date(Date.now() + 86400000)
                                .toISOString()
                                .split("T")[0]
                            } // Tomorrow
                            required
                          />
                          <p className="text-xs text-muted-foreground">
                            When do you plan to return the book?
                          </p>
                        </div>
                      </div>

                      {book.description && (
                        <div className="p-4 bg-muted/30 rounded-lg">
                          <h4 className="font-medium mb-2">About this book:</h4>
                          <p className="text-sm text-muted-foreground">
                            {book.description}
                          </p>
                        </div>
                      )}

                      <div className="flex gap-4 pt-4">
                        <Button
                          type="submit"
                          //   disabled={loading}
                          className="shadow-soft"
                        >
                          {/* {loading ? 'Processing...' : `Borrow ${formData.quantity} Cop${formData.quantity > 1 ? 'ies' : 'y'}`} */}
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          //   onClick={() => navigate(`/books/${book.id}`)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            // onClick={() => handleDelete(book.id, book.title)}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default BorrowBookPage;
