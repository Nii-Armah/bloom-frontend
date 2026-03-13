"use client";

import styles from "./SignUp.module.css";
import {
  ProfessionalData,
  ProfessionalSchema,
  defaultProfessionalValues,
} from "@/schemas/Professional";

import Link from "next/link";

import { ArrowRight, ChevronDown, EyeIcon, MailIcon, User } from "lucide-react";
import {
  Button,
  PasswordInput,
  Select,
  Textarea,
  TextInput,
} from "@mantine/core";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const SPECIALTIES = [
  {
    label: "Hair Styling",
    value: "hair_styling",
  },

  {
    label: "Hair Coloring",
    value: "hair_coloring",
  },
  {
    label: "Makeup Artistry",
    value: "makeup_artistry",
  },
  {
    label: "Skincare",
    value: "skincare",
  },
  {
    label: "Lash Services",
    value: "lash_services",
  },
  {
    label: "Nail Services",
    value: "nail_services",
  },
];

export default function ProfessionalSignUpPage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfessionalData>({
    resolver: zodResolver(ProfessionalSchema),
    defaultValues: defaultProfessionalValues,
  });

  function onRegister(data: ProfessionalData) {
    console.log("Professional Data: ", data);
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.logo}>Bloom</h1>
      <p className={styles.tagline}>Join as Beauty Professional</p>

      <form className={styles.form} onSubmit={handleSubmit(onRegister)}>
        <div className={styles.row}>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>Full Name</label>
            <Controller
              control={control}
              name="fullName"
              render={({ field }) => (
                <TextInput
                  type="text"
                  className={styles.inputField}
                  rightSection={<User width={20} height={20} />}
                  {...field}
                  error={errors.fullName?.message}
                />
              )}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label}>Email</label>
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <TextInput
                  type="email"
                  className={styles.inputField}
                  rightSection={<MailIcon width={20} height={20} />}
                  {...field}
                  error={errors.email?.message}
                />
              )}
            />
          </div>
        </div>

        <Controller
          control={control}
          name="specialty"
          render={({ field }) => (
            <Select
              label="Specialty"
              placeholder="Select One"
              data={SPECIALTIES}
              className={styles.inputField}
              rightSection={
                <ChevronDown size={16} color="rgba(148, 163, 184, 0.7)" />
              }
              classNames={{
                input: styles.selectInput,
                dropdown: styles.selectDropdown,
                option: styles.selectOption,
              }}
              comboboxProps={{
                transitionProps: { transition: "pop", duration: 200 },
              }}
              {...field}
              value={field.value ?? null}
              error={errors.specialty?.message}
            />
          )}
        />

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Professional Bio (Optional)</label>
          <Controller
            control={control}
            name="bio"
            render={({ field }) => (
              <Textarea
                className={styles.inputField}
                minRows={4}
                autosize
                placeholder="Share your experience, style, and what makes you unique..."
                {...field}
                error={errors.bio?.message}
              />
            )}
          />
        </div>

        <div className={styles.row}>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>Password</label>
            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <PasswordInput
                  className={styles.inputField}
                  rightSection={
                    <EyeIcon cursor="pointer" width={20} height={20} />
                  }
                  {...field}
                  error={errors.password?.message}
                />
              )}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label}>Confirm Password</label>
            <Controller
              control={control}
              name="password2"
              render={({ field }) => (
                <PasswordInput
                  className={styles.inputField}
                  rightSection={
                    <EyeIcon cursor="pointer" width={20} height={20} />
                  }
                  {...field}
                  error={errors.password2?.message}
                />
              )}
            />
          </div>
        </div>

        <Button type="submit" className={styles.submitButton}>
          Create Account & Go Live{" "}
          <ArrowRight width={20} height={20} className={styles.rightArrow} />
        </Button>
      </form>

      <div className={styles.infoBox}>
        ✓ Default schedule: 9am-5pm, Mon-Fri. You can update this after
        registration.
      </div>

      <p className={styles.footer}>
        Already have an account?{" "}
        <Link href="/login" className={styles.signInLink}>
          Sign in
        </Link>
      </p>
    </div>
  );
}
