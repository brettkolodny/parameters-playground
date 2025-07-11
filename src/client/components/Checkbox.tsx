/**
 * Copied from shadc/ui on 04/03/2025
 * @see {@link https://ui.shadcn.com/docs/components/checkbox}
 */
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check, Minus } from "lucide-react";
import * as React from "react";

import { cn } from "@/utils/cn";

/**
 * To allow for an indeterminate state the checkbox must be controlled, otherwise the checked prop would remain undefined
 */
export const Checkbox = React.forwardRef<
	React.ElementRef<typeof CheckboxPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
	<CheckboxPrimitive.Root
		ref={ref}
		className={cn(
			"peer h-5 w-5 shrink-0 rounded-sm border border-border border-solid focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-content-link focus-visible:ring-offset-4 focus-visible:ring-offset-surface-primary hover:enabled:border-border-hover disabled:cursor-not-allowed disabled:bg-surface-primary data-[state=checked]:bg-surface-invert-primary data-[state=unchecked]:bg-surface-primary data-[state=checked]:text-content-invert disabled:data-[state=checked]:bg-surface-tertiary hover:data-[state=checked]:bg-surface-invert-secondary",
			className,
		)}
		{...props}
	>
		<CheckboxPrimitive.Indicator
			className={cn("relative flex items-center justify-center text-current")}
		>
			<div className="flex">
				{(props.checked === true || props.defaultChecked === true) && (
					<Check className="h-4 w-4" strokeWidth={2.5} />
				)}
				{props.checked === "indeterminate" && (
					<Minus className="h-4 w-4" strokeWidth={2.5} />
				)}
			</div>
		</CheckboxPrimitive.Indicator>
	</CheckboxPrimitive.Root>
));
