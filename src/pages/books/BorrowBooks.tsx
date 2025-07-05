import { useNavigate, useParams } from "react-router-dom";
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
import { ArrowLeft, BookOpen, Calendar } from "lucide-react";
import { useBorrowBooksMutation } from "@/redux/api/bookApi";
import { useForm } from "react-hook-form";
import {Toaster ,toast } from "sonner";

const BorrowBookPage = () => {
  type Inputs = {
    quantity : number
    dueDate : number
  };

  const {
    register,
    handleSubmit,
    reset,
    // watch,
    // formState: {},
  } = useForm<Inputs>();

  const navigate = useNavigate();
  const { id } = useParams();

  const [borrowBook] = useBorrowBooksMutation(undefined);

  const onSubmit = handleSubmit(async (data: Inputs) => {


    const bookData = {
      book : id,
      quantity : data.quantity,
      dueDate : data.dueDate
    }

    
    if (id) {
      try {
        const data = await borrowBook({ body: bookData }).unwrap();

        if (data.success) {
          toast.success("Book borrowed successfully");
          reset();
          navigate("/borrowSummary")
        }
      } catch (err) {
        console.error("Failed to borrow the book:", err);
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
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Borrow Book
            </h1>
            <p className="text-muted-foreground">
              Complete the borrowing process
            </p>
          </div>
        </div>

        {/* Book Info */}
        {/* <Card className="border-border/50 shadow-soft">
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
                </Card> */}

        {/* Borrow Form */}
        <Card className="border-border/50 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <span>Borrowing Details</span>
            </CardTitle>
            <CardDescription>
              Specify how many copies you want to borrow and the return date
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity *</Label>
                  <Input
                    id="quantity"
                    {...register("quantity", {valueAsNumber : true})}
                    type="number"
                    min="1"
                    // max={book.copies}
                    // value={formData.quantity}
                    // onChange={handleChange}
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    {/* Maximum: {book.copies} cop */}
                    {/* {book.copies > 1 ? "ies" : "y"} */}
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
                    {...register("dueDate")}
                    type="date"
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



              <div className="w-fit mx-auto">
                <Button
                  type="submit"
                  variant="default"
                >
                  Submit
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BorrowBookPage;
