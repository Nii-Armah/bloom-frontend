import styles from "./SignUp.module.css";

import Link from "next/link";

import { ArrowRight, ChevronDown, EyeIcon, MailIcon, User } from "lucide-react";
import {
  Button,
  PasswordInput,
  Select,
  Textarea,
  TextInput,
} from "@mantine/core";

export default function ProfessionalSignUpPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.logo}>Bloom</h1>
      <p className={styles.tagline}>Join as Beauty Professional</p>

      <form className={styles.form}>
        <div className={styles.row}>
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
        </div>

        <Select
          label="Specialty"
          placeholder="Select One"
          data={[
            "Software Engineer",
            "Civil Engineer",
            "Electrical Engineer",
            "Mechanical Engineer",
          ]}
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
        />

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Professional Bio (Optional)</label>
          <Textarea
            className={styles.inputField}
            minRows={4}
            autosize
            placeholder="Share your experience, style, and what makes you unique..."
          />
        </div>

        <div className={styles.row}>
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
        </div>

        <Button type="button" className={styles.submitButton}>
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
