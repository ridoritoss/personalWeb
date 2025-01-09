import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-no-wrap rounded-full text-base font-semibold ring-offset-white transisition-colors",
  {
    variants: {
      variant: {
        default: "bg-accent text-primary hover:bg-accent-hover text-white",
        primary: "bg-primary text-white",
        outline: "border border-primary bg-transparent text-accent hover:bg-accent hover:text-white hover:border-accent transition-all duration-300",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-[44px] px-6",
        sm: "h-[44px] px-6",
        lg: "h-[56px] px-8 text-uppercase tracking-[2px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
