import { deleteServiceAction } from '@/actions/servicePost.action';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Trash2 } from 'lucide-react';

export function DeleteConfirmationDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Trash2 />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Are you sure you want to delete this?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. Proceed with deletion?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button variant={'destructive'} type="submit">
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
