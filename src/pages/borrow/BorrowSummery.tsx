import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart3, BookOpen, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useGetBorrowedBooksQuery } from "@/redux/api/bookApi";
import type { IBorrow } from "@/types/bookTypes";
import Loading from "@/components/layout/loading/loading";

const BorrowSummary = () => {
  const navigate = useNavigate();

  const { data: borrow, isLoading } = useGetBorrowedBooksQuery(undefined);

  if (isLoading) {
    return (
      <div className="w-fit h-full mx-auto mt-40 mb-40">
        <Loading />
      </div>
    );
  }

  return (
    <div className="container py-8 mx-auto">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="flex-1">
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Borrow Summary
            </h1>
            <p className="text-muted-foreground">
              Overview of all borrowed books and statistics
            </p>
          </div>
        </div>

        {/* Borrow Summary Table */}
        <Card className="border-border/50 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              <span>Borrowing Activity</span>
            </CardTitle>
            <CardDescription>
              Detailed breakdown of borrowed books by title
            </CardDescription>
          </CardHeader>
          <CardContent>
            {borrow?.data?.length === 0 ? (
              <div className="text-center py-12">
                <BookOpen className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  No books borrowed yet
                </h3>
                <p className="text-muted-foreground mb-4">
                  Start by borrowing some books from our collection.
                </p>
                <Button asChild>
                  <Link to="/books">Browse Books</Link>
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Desktop Table */}
                <div>
                  <div className="rounded-lg border border-border/50 overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-muted/30">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Book Title
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            ISBN
                          </th>
                          <th className="px-6 py-3 text-center text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Total Borrowed
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-background divide-y divide-border/50">
                        {borrow?.data?.map((item: IBorrow, index: number) => (
                          <tr
                            key={index}
                            className="hover:bg-muted/20 transition-colors"
                          >
                            <td className="px-6 py-4">
                              <div className="font-medium text-foreground">
                                {item?.book.title}
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="font-mono text-sm text-muted-foreground">
                                {item?.book.isbn}
                              </div>
                            </td>
                            <td className="px-6 py-4 text-center">
                              <Badge
                                variant="secondary"
                                className="font-semibold"
                              >
                                {item.totalQuantity}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="flex justify-center">
          <Button asChild className="shadow-soft">
            <Link to="/books">
              <BookOpen className="mr-2 h-4 w-4" />
              Browse More Books
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BorrowSummary;
