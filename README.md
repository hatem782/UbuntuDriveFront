# **UbuntuDriveFront**

UbuntuDriveFront is a cloud file management and sharing application designed to resemble the Ubuntu file system interface. It allows users to manage, organize, and share their files easily, with an intuitive design inspired by Ubuntu’s aesthetic. The project is built using **Next.js** for the frontend and a backend API hosted on **Node.js**.

The app mimics the functionality of popular cloud storage services, such as Google Drive, but offers the simplicity and visual design that Ubuntu users love.

**Live Demo**: [https://ubuntu-drive.duckdns.org/](https://ubuntu-drive.duckdns.org/)

## **Features**

- **File Management**: Upload, organize, and manage your files with a clean and user-friendly interface.
- **File Sharing**: Share your files with others via secure links.
- **Responsive Design**: Fully responsive interface for seamless usage on any device.
- **Cloud Sync**: Sync your files across different devices.
- **Ubuntu UI Design**: A sleek and familiar interface based on Ubuntu’s native design.

## **Tech Stack**

- **Frontend**: Next.js
- **Backend**: Node.js (API)
- **Reverse Proxy**: Nginx
- **SSL**: Let's Encrypt (HTTPS)
- **Deployment**: VPS (Ubuntu 20.04)

## **Getting Started**

### **1. Clone the repository**

To get started, clone the repository to your local machine:

```bash
git clone https://github.com/hatem782/UbuntuDriveFront.git
cd UbuntuDriveFront
```

### **2. Install dependencies**

Make sure you have **Node.js** and **npm** installed. If not, install them following the instructions for your OS. Then, run:

```bash
npm install
```

### **3. Run the app locally**

To run the Next.js app locally on port 3000:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### **4. Backend API Setup**

The backend for this project runs on port 8080. You can set up the backend by following the API-specific instructions in the backend folder.

---

## **Deployment**

The app is deployed on a **VPS** running **Ubuntu**. Here's a brief overview of how it’s deployed:

- **Frontend** (Next.js) is running on port `3000`
- **Backend API** is running on port `8080`
- **Nginx** is used as a reverse proxy to route traffic for the respective domains:
  - `https://ubuntu-drive.duckdns.org/` → Frontend (port 3000)
  - `https://ubuntu-drive-api.duckdns.org/` → Backend API (port 8080)
- SSL certificates are managed with **Let’s Encrypt** for secure HTTPS connections.

## **Contributing**

Feel free to fork this repository, contribute, or create issues for suggestions and improvements. Pull requests are always welcome!

---

## **License**

This project is open source and available under the MIT License.
