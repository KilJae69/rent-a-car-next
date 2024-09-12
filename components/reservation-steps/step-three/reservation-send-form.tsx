"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionTitle from "@/components/common/section-title";
import Link from "next/link";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFormatter, useLocale } from "next-intl";
import {
  cn,
  formatDateIntl,
  generateTimeOptions,
  localeMap,
} from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Calendar } from "@/components/ui/calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import TotalPrice from "@/components/reservation-steps/reservation-widget/total-price";
import { Checkbox } from "@/components/ui/checkbox";
const FormSchema = z.object({
  first_name: z.string({
    required_error: "Please enter your first name",
  }),
  last_name: z.string({
    required_error: "Please enter your first name",
  }),
  email: z
    .string({
      required_error: "Please enter your email",
    })
    .email({ message: "Please enter a valid email" }),
  phone: z.string({
    required_error: "Please enter your phone number",
  }),
  flight_number: z.string(),
  message: z.string(),
  document: z.string(),
  doc_number: z.string(),
  place_of_issue: z.string(),
  issue_date: z.date(),
  timehours: z.string(),
  options: z.enum(["arrival", "50", "100"]),
  promo_code: z.string(),
  personal_permission: z.boolean().refine((val) => val === true, {
    message: "Permission is required",
  }),
  terms_permission: z.boolean().refine((val) => val === true, {
    message: "Terms acceptance is required",
  }),
  newsletter: z.boolean().optional(),
});
export default function ReservationSendForm() {
  const format = useFormatter();
  const timeOptions = generateTimeOptions();
  const currentLocale = useLocale();
  const dateFnsLocale = localeMap[currentLocale] || localeMap["en"];
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      message: "",
      document: "1",
      promo_code: "",
      personal_permission: false,
      terms_permission: false,
      newsletter: false,
      options: "100",
    },
  });
  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  return (
    <div className="container relative px-4 pb-0 pt-5 lg:pt-24 xl:pb-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <SectionTitle
            title="Basic Information"
            containerClassName="text-center pb-10 mb-0"
            descriptionClassName="max-w-[650px] mx-auto"
          />
          <div className="grid w-full grid-cols-12 gap-4">
            <div className="col-span-12 grid grid-cols-2 gap-4 lg:col-span-8">
              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem className="col-span-2 md:col-span-1 lg:pb-2">
                    <FormLabel className="pl-4 font-semibold">
                      First name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="First name"
                        {...field}
                        className="pl-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem className="col-span-2 md:col-span-1 lg:pb-2">
                    <FormLabel className="pl-4 font-semibold">
                      Last name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Last name"
                        {...field}
                        className="pl-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="col-span-2 md:col-span-1 lg:pb-2">
                    <FormLabel className="pl-4 font-semibold">Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Email"
                        {...field}
                        className="pl-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="col-span-2 flex flex-col gap-4 md:col-span-1 md:flex-row">
                <div className="flex-1">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="lg:pb-2">
                        <FormLabel className="pl-4 font-semibold">
                          Phone
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Phone"
                            type="number"
                            {...field}
                            className="pl-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="md:w-40">
                  <FormField
                    control={form.control}
                    name="flight_number"
                    render={({ field }) => (
                      <FormItem className="pb-2">
                        <FormLabel className="pl-4 font-semibold">
                          Flight number
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Flight number"
                            type="number"
                            {...field}
                            className="pl-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="h-full">
                    <FormLabel className="pl-4 font-semibold">
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us a little bit about yourself"
                        rows={6}
                        className="pl-4"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="gray-bg-before relative my-12 rounded-xl pb-10">
            <SectionTitle
              title="Online Check-In"
              containerClassName="text-center py-10 mb-0"
              descriptionClassName="max-w-[650px] mx-auto"
            />
            <div className="grid w-full grid-cols-12 gap-4">
              <FormField
                control={form.control}
                name="document"
                render={({ field }) => (
                  <FormItem className="col-span-12 pb-2 sm:col-span-6 xl:col-span-3">
                    <FormLabel className="pl-4 font-semibold">Email</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a verified email to display" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <SelectItem value="1">Driver's license</SelectItem>
                        <SelectItem value="2">Passport</SelectItem>
                        <SelectItem value="3">Some other document</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="doc_number"
                render={({ field }) => (
                  <FormItem className="col-span-12 pb-2 sm:col-span-6 xl:col-span-2">
                    <FormLabel className="pl-4 font-semibold">
                      Document number
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Document number"
                        type="number"
                        {...field}
                        className="pl-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="place_of_issue"
                render={({ field }) => (
                  <FormItem className="col-span-12 md:col-span-6 xl:col-span-3">
                    <FormLabel className="pl-4 font-semibold">
                      Last name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Place of issue"
                        {...field}
                        className="pl-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="issue_date"
                render={({ field }) => (
                  <FormItem className="col-span-12 md:col-span-3 xl:col-span-2">
                    <FormLabel className="pl-4 font-semibold">
                      Issue date
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left text-sm font-normal hover:bg-transparent hover:text-black",
                              !field.value && "text-muted-foreground",
                            )}
                          >
                            <Image
                              src="/icons/ico_calendar.svg"
                              alt="calendar"
                              width={15}
                              height={15}
                              className="mr-2 h-4 w-4"
                            />
                            {field.value ? (
                              formatDateIntl(field.value, format)
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                          locale={dateFnsLocale}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="timehours"
                render={({ field }) => (
                  <FormItem className="col-span-12 md:col-span-3 xl:col-span-2">
                    <FormLabel className="pl-4 font-semibold">
                      Time of issue
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <div className="flex gap-2">
                            <Image
                              src="/icons/ico_clock.svg"
                              alt="location"
                              width={16}
                              height={16}
                              className="filter-primary"
                            />
                            <SelectValue placeholder="Pickup location" />
                          </div>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {timeOptions.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div>
            <FormField
              control={form.control}
              name="options"
              render={({ field }) => (
                <FormItem className="mb-14 flex flex-col justify-start lg:flex-row lg:items-center lg:justify-between">
                  <FormLabel className="pb-5 text-xl font-bold lg:pb-0 lg:text-2xl">
                    Payment options
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col gap-6 space-x-1 space-y-0 md:flex-row lg:items-center"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="arrival" />
                        </FormControl>
                        <FormLabel className="cursor-pointer text-base">
                          Pay on Arival
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="50" />
                        </FormControl>
                        <FormLabel className="cursor-pointer text-base">
                          50% deposit payment
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="100" />
                        </FormControl>
                        <FormLabel className="cursor-pointer text-base">
                          100% full amount payment
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="relative flex flex-col justify-between py-14 lg:flex-row lg:items-center">
            <Image
              src="/images/shadow.svg"
              alt="shadow"
              width={1200}
              height={38}
              className="pointer-events-none absolute left-0 top-0 h-auto w-full"
            />
            <FormField
              control={form.control}
              name="promo_code"
              render={({ field }) => (
                <FormItem className="flex flex-col sm:flex-row sm:items-center">
                  <FormLabel className="mt-2 block whitespace-nowrap pr-4 text-lg font-bold">
                    Have a promo code?
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Promo code"
                      {...field}
                      className="pl-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center justify-end pt-10 lg:justify-between lg:pt-0">
              <p className="pr-5 text-lg font-bold"> Total for payment</p>

              <TotalPrice
                titleClassName="text-black text-2xl"
                vatClassName="text-black"
              />
            </div>
            <Image
              src="/images/shadow.svg"
              alt="shadow"
              width={1200}
              height={38}
              className="pointer-events-none absolute bottom-0 left-0 h-auto w-full rotate-180"
            />
          </div>
          <div className="flex flex-col py-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <FormField
                control={form.control}
                name="personal_permission"
                render={({ field }) => (
                  <FormItem className="mb-4 flex flex-row items-center space-x-3 space-y-0 py-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="cursor-pointer">
                        I give my permission to procesing personal information I
                        have listed.
                      </FormLabel>
                    </div>
                    <FormMessage className="left-6" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="terms_permission"
                render={({ field, fieldState }) => (
                  <FormItem className="mb-4 flex flex-row items-center space-x-3 space-y-0 py-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="cursor-pointer">
                        Yes, I read and accept general information and rental
                        conditions.
                      </FormLabel>
                    </div>
                    <FormMessage className="left-6" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="newsletter"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-3 space-y-0 py-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="cursor-pointer">
                        I want to receive monthly newsletter. You can remove
                        your e-mail adress from our mailing list at any time.
                      </FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mt-10 lg:mt-0">
              <Button
                type="submit"
                className="h-[50px] w-full px-10 py-8 font-semibold"
                disabled={form.formState.isSubmitting}
              >
                Send the reservation
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
