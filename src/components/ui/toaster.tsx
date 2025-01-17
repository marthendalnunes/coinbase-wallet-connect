'use client';

import { useToast } from '@/lib/hooks/use-toast';
import { ToastProvider, ToastViewport } from '@/components/ui/toast';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Dialog key={id} defaultOpen={true}>
            <DialogContent>
              <DialogHeader>
                {title && <DialogTitle>{title}</DialogTitle>}
                {description && (
                  <DialogDescription>{description}</DialogDescription>
                )}
                <div className="pt-4">{action}</div>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
