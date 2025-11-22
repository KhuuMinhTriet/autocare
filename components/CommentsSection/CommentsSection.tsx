'use client';

import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Dialog, DialogClose, DialogContent, DialogDescription } from "../ui/dialog";
import { Rating, RatingButton } from "../ui/shadcn-io/rating";
import { Textarea } from "../ui/textarea";

export function CommentsSection({ user }: { user: any }) {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl mb-8">Customer Reviews</h2>
      <Card className="p-6 mb-8">
        <h3 className="text-xl mb-4">Leave a Review</h3>
        <form>
          <div className="mb-4 space-x-4 flex items-center">
            <label className="block text-sm">
              Rate Us
            </label>
            <div className="flex flex-col items-center gap-3">
              <Rating defaultValue={5}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <RatingButton className="text-yellow-500" key={index} />
                ))}
              </Rating>
            </div>
          </div>

          <div className="mb-4">
            <Textarea
              placeholder={`Leave your comments...`}
              rows={4}
              className="w-full"
            />
          </div>
          <Button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700"
          >
            Submit
          </Button>
        </form>
      </Card>
    </div>
  )
}

