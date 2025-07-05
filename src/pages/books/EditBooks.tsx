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
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Edit, Save } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";


const EditBooks = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" size="sm" className="hover:text-destructive">
          <Edit className="h-3 w-3" />
          Edit
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center">
            Edit Book
          </AlertDialogTitle>
          <AlertDialogDescription>
            <div className="container py-8 max-w-2xl">
              <div className="">
                {/* Form */}
                <Card className="border-border/50 shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Save className="h-5 w-5 text-primary" />
                      <span>Book Information</span>
                    </CardTitle>
                    <CardDescription>
                      {/* Update the details for "{book.title}" */}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form
                    // onSubmit={handleSubmit} className="space-y-6"
                    >
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="title">Title *</Label>
                          <Input
                            id="title"
                            name="title"
                            // value={formData.title}
                            // onChange={handleChange}
                            placeholder="Enter book title"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="author">Author *</Label>
                          <Input
                            id="author"
                            name="author"
                            // value={formData.author}
                            // onChange={handleChange}
                            placeholder="Enter author name"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="genre">Genre *</Label>
                          <Input
                            id="genre"
                            name="genre"
                            // value={formData.genre}
                            // onChange={handleChange}
                            placeholder="e.g., Fiction, Science, Romance"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="isbn">ISBN *</Label>
                          <Input
                            id="isbn"
                            name="isbn"
                            // value={formData.isbn}
                            // onChange={handleChange}
                            placeholder="978-0-123456-78-9"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="copies">Number of Copies</Label>
                          <Input
                            id="copies"
                            name="copies"
                            type="number"
                            min="1"
                            // value={formData.copies}
                            // onChange={handleChange}
                            placeholder="1"
                          />
                        </div>

                        <div className="space-y-2 col-span-2">
                          <Label htmlFor="description">Description</Label>
                          <Textarea
                            id="description"
                            name="description"
                            //   value={formData.description}
                            //   onChange={handleChange}
                            placeholder="Enter a brief description of the book (optional)"
                            rows={4}
                          />
                        </div>
                      </div>

                      <div className="flex gap-4 pt-4">
                        {/* <Button 
                  type="submit" 
                  disabled={loading}
                  className="shadow-soft"
                >
                  {loading ? 'Updating...' : 'Update Book'}
                </Button> */}
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

export default EditBooks;
