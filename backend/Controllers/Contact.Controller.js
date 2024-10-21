import Contact from "../Models/Contact.Model.js";

export const CreatContact = async (req, res) => {
  try {
    const { fullname, email, number, message } = req.body;
    // Validate the input data
    if (!fullname || !email || !number || !message) {
      return res.json({ success: false, message: "All fields are required" });
    }
    const contact = new Contact({
      fullname,
      email,
      number,
      message,
    });
    await contact.save();
    res.json({
      success: true,
      message: "Thanks For Your Contact !",
      contact,
    });
  } catch (error) {
    res.json({ success: false, error: error.message });
    console.log("Error while creating contact", error.message);
  }
};

export const GetContact = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json({
      success: true,
      message: "All Contact Fetch Successfully",
      contacts,
    });
  } catch (error) {
    res.json({ success: false, error: error.message });
    console.log("Error while fetching contacts", error.message);
  }
};

export const DeleteContact = async (req, res) => {
  try {
    const id = req.params.id;
    const contact = await Contact.findByIdAndDelete(id);
    if (!contact) {
      return res.json({ success: false, message: "Contact not found" });
    }
    res.json({
      success: true,
      message: "Contact deleted successfully",
      contact,
    });
  } catch (error) {
    res.json({ success: false, error: error.message });
    console.log("Error while deleting contact", error.message);
  }
};
