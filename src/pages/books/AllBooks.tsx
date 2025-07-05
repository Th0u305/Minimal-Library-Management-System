import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

import { BookOpen, Trash2, Plus, Search, Eye, Edit } from "lucide-react";
import { useDeleteBookMutation, useGetAllBooksQuery } from "@/redux/api/bookApi";
import Loading from "@/components/layout/loading/loading";
import type { IBook } from "@/types/bookTypes";
import { toast, Toaster } from "sonner";
import Pagination from "./Pagination";
import { useState } from "react";

const AllBooks = () => {

  const [currentPage, setCurrentPage] = useState<number>(1);
  
  const { data: books, isLoading } = useGetAllBooksQuery(currentPage);

  const [deleteBook] = useDeleteBookMutation(undefined)



  const deleteBooks = async (id:string)=>{

    if (id) {
      try {
        // Call the 'editBook' trigger with the required arguments
        const data = await deleteBook({ body: {id : id} }).unwrap();

        if (data.success) {
          toast.success("Book Added successfully");
        }
      } catch (err) {
        console.error("Failed to Add the book:", err);
      }
    }
  }

  if (isLoading) {
    return (
      <div className="w-fit h-full mx-auto mt-40 mb-40">
        <Loading />
      </div>
    );
  }
  return (
    <div className="container mx-auto mt-20 mb-20">
      <Toaster richColors/>
      <div className="flex flex-col space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Library Collection
            </h1>
            <p className="text-muted-foreground">
              Manage and explore our book collection
            </p>
          </div>
          <Button asChild className="shadow-soft">
            <Link to="/create-book">
              <Plus className="mr-2 h-4 w-4" />
              Add New Book
            </Link>
          </Button>
        </div>

        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search books, authors, genres..."
            className="pl-10"
          />
        </div>

        {/* Books Grid */}
        {books.data.length === 0 ? (
          <div className="text-center py-12">
            <BookOpen className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No books found</h3>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {books.data.map((book: IBook, idx: number) => (
              <Card
                key={idx}
                className="group hover:shadow-medium transition-all duration-300 border-border/50"
              >
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-lg leading-tight mb-1 group-hover:text-primary transition-colors">
                        {book.title}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        by {book.author}
                      </CardDescription>
                    </div>
                    <Badge
                      variant={book.available ? "default" : "destructive"}
                      className="ml-2"
                    >
                      {book.available ? "Available" : "Unavailable"}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Genre:</span>
                      <span className="font-medium">{book.genre}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">ISBN:</span>
                      <span className="font-mono text-xs">{book.isbn}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Copies:</span>
                      <span className="font-medium">{book.copies}</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {book.description}
                    </p>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <Link to={book._id}>
                        <Eye className="mr-1 h-3 w-3" />
                        View
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <Link to={`/editBook/${book._id}`}>
                        <Edit className="mr-1 h-3 w-3" />
                        Edit
                      </Link>
                    </Button>

                    {book.available && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="flex-1"
                      >
                        <Link to={`/borrowBook/${book._id}`}>
                          <BookOpen  className="mr-1 h-3 w-3" />
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
                            Are you sure you want to delete "{book.title}"? This
                            action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => deleteBooks(book._id)}
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                          >
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </div>
  );
};

export default AllBooks;
