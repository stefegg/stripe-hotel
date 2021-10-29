import React from "react";
import { useTheme } from "styled-components";
import { BillingInfo, DoubleRow, SingleRow, PostalRow } from "./styles";
import { InputField } from "..";
const AddressForm = ({ formik }) => {
  const theme = useTheme();
  return (
    <BillingInfo>
      <DoubleRow>
        <InputField
          label={"First Name"}
          value={formik.values.firstName}
          onChange={formik.handleChange("firstName")}
          onBlur={formik.handleBlur("firstName")}
          borderColor={theme.colors.goButton}
          error={formik.touched.firstName && formik.errors.firstName}
        />
        <InputField
          label={"Last Name"}
          value={formik.values.lastName}
          onChange={formik.handleChange("lastName")}
          onBlur={formik.handleBlur("lastName")}
          borderColor={theme.colors.goButton}
          error={formik.touched.lastName && formik.errors.lastName}
        />
      </DoubleRow>
      <SingleRow>
        <InputField
          label={"Street Address"}
          value={formik.values.addressOne}
          onChange={formik.handleChange("addressOne")}
          onBlur={formik.handleBlur("addressOne")}
          borderColor={theme.colors.goButton}
          error={formik.touched.addressOne && formik.errors.addressOne}
        />
      </SingleRow>
      <SingleRow>
        <InputField
          label={"Apt #, Floor, etc. (optional)"}
          value={formik.values.addressTwo}
          onChange={formik.handleChange("addressTwo")}
          onBlur={formik.handleBlur("addressTwo")}
          borderColor={theme.colors.goButton}
          error={formik.touched.addressTwo && formik.errors.addressTwo}
        />
      </SingleRow>
      <DoubleRow>
        <InputField
          label={"City "}
          value={formik.values.addressCity}
          onChange={formik.handleChange("addressCity")}
          onBlur={formik.handleBlur("addressCity")}
          borderColor={theme.colors.goButton}
          error={formik.touched.addressCity && formik.errors.addressCity}
        />
        <InputField
          label={"State"}
          value={formik.values.addressState}
          onChange={formik.handleChange("addressState")}
          onBlur={formik.handleBlur("addressState")}
          borderColor={theme.colors.goButton}
          error={formik.touched.addressState && formik.errors.addressState}
        />
      </DoubleRow>
      <PostalRow>
        <InputField
          label={"Postal Code"}
          value={formik.values.addressPostal}
          onChange={formik.handleChange("addressPostal")}
          onBlur={formik.handleBlur("addressPostal")}
          borderColor={theme.colors.goButton}
          error={formik.touched.addressPostal && formik.errors.addressPostal}
          inputWidth={"50%"}
        />
      </PostalRow>
    </BillingInfo>
  );
};

export default AddressForm;
