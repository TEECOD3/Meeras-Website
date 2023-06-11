import { forwardRef, InputHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utils/tailwindclassmod";

const inputVariants = cva(
  "mx-auto p-2 capitalize border-gray-200 bg-white text-sm border-[1px] rounded-md inline-flex focus:border-blue-200 outline-none w-[100%]",
  {
    variants: {
      variant: {
        default: "bg-white  text-gray-900 text-[0.6rem] ",
        bg_gray: "bg-gray-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  inputs: {};
}

// eslint-disable-next-line react/display-name
const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { inputs, className, variant } = props;
  return (
    <input
      ref={ref}
      {...inputs}
      className={cn(inputVariants({ className, variant }))}
    />
  );
});

export default Input;
