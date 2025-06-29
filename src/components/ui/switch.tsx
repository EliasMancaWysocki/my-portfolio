import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(`
        peer outline-none items-center rounded-full border border-transparent shadow-xs
        data-[state=checked]:bg-pipboy-light data-[state=unchecked]:bg-pipboy-light 
        focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
        hover:cursor-pointer
        inline-flex h-7 w-14 shrink-0 transition-all 
        disabled:cursor-not-allowed disabled:opacity-50`,
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(`
          bg-pipboy-dark
          pointer-events-none block size-6 rounded-full ring-0 transition-transform 
          data-[state=checked]:translate-x-[calc(100%+5px)] data-[state=unchecked]:translate-x-0`
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
