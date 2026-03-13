"use client";

import styles from "./LoginPage.module.css";
import { useLogin } from "@/hooks/useAuth";
import { LoginSchema, LoginData, defaultLoginValues } from "@/schemas/Login";
import { setServerErrors } from "@/utils/form";

import Link from "next/link";
import { ArrowRight, EyeIcon, MailIcon } from "lucide-react";
import { Button, PasswordInput, TextInput } from "@mantine/core";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function LoginPage() {
  const { mutate, isPending } = useLogin();

  const {
    control,
    formState: { errors },
    setError,
    handleSubmit,
  } = useForm<LoginData>({
    resolver: zodResolver(LoginSchema),
    defaultValues: defaultLoginValues,
  });

  function onLogin(data: LoginData) {
    mutate(data, {
      onError: (err: any) => setServerErrors(err, setError),
    });
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.logo}>Bloom</h1>
      <p className={styles.tagline}>Beauty professionals, blooming</p>

      <form className={styles.form} onSubmit={handleSubmit(onLogin)}>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Email</label>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <TextInput
                {...field}
                type="text"
                className={styles.inputField}
                rightSection={<MailIcon width={20} height={20} />}
                error={errors.email?.message}
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
                {...field}
                className={styles.inputField}
                rightSection={
                  <EyeIcon cursor="pointer" width={20} height={20} />
                }
                error={errors.password?.message}
              />
            )}
          />
        </div>

        <Button
          type="submit"
          className={styles.submitButton}
          loading={isPending}
        >
          Sign In{" "}
          <ArrowRight width={20} height={20} className={styles.rightArrow} />
        </Button>

        <div className={styles.divider}>
          <hr className={styles.dividerLine} />
          <p className={styles.dividerText}>New to Bloom?</p>
          <hr className={styles.dividerLine} />
        </div>

        <Link href="/signup/client" className={styles.clientButton}>
          Sign up as Client
        </Link>

        <Link href="/signup/professional" className={styles.professionalButton}>
          Join as Beauty Professional
        </Link>

        <p className={styles.footer}>
          By signing in, you agree to Bloom&apos;s Terms of Service and Privacy
          Policy
        </p>
      </form>
    </div>
  );
}
