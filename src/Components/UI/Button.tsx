import { ButtonHTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../utils/tailwindclassmod";

const buttonVariants = cva(
    "active:scale-95 inline-flex items-center justify-center rounded-md  text-sm font-medium transition-colors focus:outline-none  focus:ring-2 focus:ring-white  focus:ring-offset-slate-900  data-[state-open]:bg-slate-100 ",
    {
        variants: {
            variants: {
                default: "bg-blue-600 text-white hover:bg-slate-700 ",
                outline:
                    " bg-transparent border border-slate-200 hover:bg-slate-100",
                redButton: "bg-red-500 text-white hover:bg-transparent/30 ",
            },

            size: {
                default: "py-2 px-4",
                sm: "h-9 px-2 rounded-md",
            },
            defaultVariants: {
                variant: "default",
                size: "default",
            },
        },
    }
);

interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { className, size, variants, ...prop } = props;
    return (
        <button
            ref={ref}
            className={cn(buttonVariants({ variants, size, className }))}
            {...prop}
        />
    );
});

export { Button, buttonVariants };
