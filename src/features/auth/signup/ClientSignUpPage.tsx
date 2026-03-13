"use client";

import styles from "./SignUp.module.css";
import {
  ClientSchema,
  ClientData,
  defaultClientValues,
} from "@/schemas/Client";

import Link from "next/link";

import { ArrowRight, EyeIcon, MailIcon, Phone, User } from "lucide-react";
import { Button, PasswordInput, TextInput } from "@mantine/core";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateClient } from "@/hooks/useClient";
import { setServerErrors } from "@/utils/form";

export default function ClientSignUpPage() {
  const { mutate, isPending } = useCreateClient();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ClientData>({
    resolver: zodResolver(ClientSchema),
    defaultValues: defaultClientValues,
  });

  function onRegister(data: ClientData) {
    mutate(data, {
      onError: (err: any) => {
        setServerErrors(err, setError);
      },
    });
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.logo}>Create Your Account</h1>
      <p className={styles.tagline}>
        Join Bloom and discover beauty professionals
      </p>

      <form className={styles.form} onSubmit={handleSubmit(onRegister)}>
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

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Phone Number</label>
          <Controller
            control={control}
            name="contactNumber"
            render={({ field }) => (
              <TextInput
                className={styles.inputField}
                rightSection={<Phone width={20} height={20} />}
                {...field}
                error={errors.contactNumber?.message}
              />
            )}
          />
        </div>

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

        <Button
          type="submit"
          className={styles.submitButton}
          loading={isPending}
        >
          Sign Up{" "}
          <ArrowRight width={20} height={20} className={styles.rightArrow} />
        </Button>
      </form>

      <p className={styles.footer}>
        Already have an account?{" "}
        <Link href="/login" className={styles.signInLink}>
          Sign in
        </Link>
      </p>
    </div>
  );
}
