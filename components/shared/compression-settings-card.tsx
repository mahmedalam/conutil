"use client";

import { outputFormats, quickPresets } from "@/constants";
import { cn } from "@/lib/utils";
import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Separator } from "../ui/separator";
import { Slider } from "../ui/slider";

type Props = {
  initialSettings: TCompressionSettings;
  onDone: (settings: TCompressionSettings) => void;
};

export default function CompressionSettingsCard({
  onDone,
  initialSettings,
}: Props) {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] =
    useState<TCompressionSettings>(initialSettings);

  return (
    <div className="card">
      <h2>Compression Options</h2>
      <div className="space-y-6">
        {/* Quality */}
        <div className="space-y-3">
          <div className="text-label">Quality: {settings.quality}%</div>
          <Slider
            className="w-full"
            value={[settings.quality]}
            max={100}
            step={5}
            onValueChange={(value) =>
              setSettings({
                ...settings,
                quality: value[0],
              })
            }
          />
        </div>
        {/* Output Format */}
        <div className="space-y-3">
          <div className="text-label">Output Format</div>
          {/* Combobox */}
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                role="combobox"
                aria-expanded={open}
                className="w-full sm:w-full justify-between uppercase font-medium border-border"
              >
                {settings.format}
                <ChevronDown className="opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <Command>
                <CommandInput placeholder="Search format..." className="h-9" />
                <CommandList>
                  <CommandEmpty>No format found.</CommandEmpty>
                  <CommandGroup>
                    {outputFormats.map((format) => (
                      <CommandItem
                        className="uppercase"
                        key={format}
                        value={format}
                        onSelect={(currentValue) => {
                          setSettings({
                            ...settings,
                            format: currentValue,
                          });
                          setOpen(false);
                        }}
                      >
                        {format}
                        <Check
                          className={cn(
                            "ml-auto",
                            format === settings.format
                              ? "opacity-100"
                              : "opacity-0",
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
        {/* Resize */}
        <div className="space-y-3">
          <div className="text-label">Resize (Optional)</div>
          <div className="flex gap-2">
            <Input
              type="number"
              placeholder="maxWidth"
              value={settings.maxWidth}
              onChange={(e) => {
                const value =
                  e.target.value === "" ? "" : Number(e.target.value);
                setSettings({
                  ...settings,
                  maxWidth: value,
                });
              }}
            />
            <Input
              type="number"
              placeholder="maxHeight"
              value={settings.maxHeight}
              onChange={(e) => {
                const value =
                  e.target.value === "" ? "" : Number(e.target.value);
                setSettings({
                  ...settings,
                  maxHeight: value,
                });
              }}
            />
          </div>
        </div>
        {/* Quick Presets */}
        <div className="space-y-3">
          <div className="text-label">Quick Presets</div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {quickPresets.map((preset, idx) => (
              <Button
                className={idx === quickPresets.length - 1 ? "col-span-2" : ""}
                key={preset.name}
                variant={preset.name === settings.name ? "default" : "outline"}
                size="sm"
                onClick={() => setSettings(preset)}
              >
                {preset.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <Separator />
      {/* Done Button */}
      <Button onClick={() => onDone(settings)}>
        <Check />
        Done
      </Button>
    </div>
  );
}
