import styles from "./SignUp.module.css";

import Link from "next/link";

import { ArrowRight, EyeIcon, MailIcon, Phone, User } from "lucide-react";
import { Button, PasswordInput, TextInput } from "@mantine/core";

export default function ClientSignUpPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.logo}>Create Your Account</h1>
      <p className={styles.tagline}>
        Join Bloom and discover beauty professionals
      </p>

      <form className={styles.form}>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Full Name</label>
          <TextInput
            type="text"
            className={styles.inputField}
            rightSection={<User width={20} height={20} />}
          />
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Email</label>
          <TextInput
            type="email"
            className={styles.inputField}
            rightSection={<MailIcon width={20} height={20} />}
          />
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Phone Number</label>
          <TextInput
            className={styles.inputField}
            rightSection={<Phone width={20} height={20} />}
          />
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Password</label>
          <PasswordInput
            className={styles.inputField}
            rightSection={<EyeIcon cursor="pointer" width={20} height={20} />}
          />
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Confirm Password</label>
          <PasswordInput
            className={styles.inputField}
            rightSection={<EyeIcon cursor="pointer" width={20} height={20} />}
          />
        </div>

        <Button type="button" className={styles.submitButton}>
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
