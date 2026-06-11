# Punch App

Punch is a mobile workforce attendance application designed for remote and hybrid employees to easily record their working hours from anywhere.

The app allows users to securely punch in and punch out, helping organizations track employee attendance, working time, and work schedules without requiring employees to be physically present in the office.

## Features

- Clock In (Punch In) from any location
- Clock Out (Punch Out) to record end of workday
- Real-time attendance tracking
- Remote workforce support
- Simple and user-friendly interface
- Accurate work hour recording
- Attendance history and records

## Stack

- React Native `0.84`
- React `19`
- TypeScript
- React Navigation
- TanStack Query
- i18next (`fr-FR`, `en-EN`)
- MMKV storage
- Ky HTTP client

## Requirements

- Node.js `>= 22.11.0` (required by this project)
- Yarn
- Xcode + CocoaPods (for iOS)
- Android Studio (for Android)

> iOS build currently targets **iOS 16.0+**.

## Getting Started

```bash
# 1) Install dependencies
yarn

# 2) iOS only: install pods
yarn pod-install
```

## Run the App

### Start Metro

```bash
yarn start
```

### iOS

```bash
yarn ios
```

### Android

```bash
yarn android
```

## Environment Variables

This project reads `API_URL` in [src/services/instance.ts](src/services/instance.ts).

Create a `.env` file at project root:

```env
API_URL=https://your-api-domain.com
```

## Scripts

- `yarn ios` – run iOS app
- `yarn android` – run Android app
- `yarn start` – start Metro
- `yarn test` – run tests
- `yarn lint` – run ESLint + Prettier check + TypeScript check
- `yarn lint:fix` – auto-fix lint/format issues
- `yarn pod-install` – install iOS pods

## Project Structure

- [src/App.tsx](src/App.tsx) – app root providers
- [src/navigation](src/navigation) – navigation setup
- [src/screens](src/screens) – screen modules
- [src/hooks](src/hooks) – domain and shared hooks
- [src/services](src/services) – API/service layer
- [src/theme](src/theme) – design system and theme provider
- [src/translations](src/translations) – i18n resources

## Notes

- Babel alias `@` points to [src](src).
- If Metro/Xcode scripts fail with modern JS features (e.g. `toReversed`), ensure Node 22 is active.
- For Xcode script phases, Node is pinned via [ios/.xcode.env.local](ios/.xcode.env.local).

## Repository

GitHub: https://github.com/Nawalnazari/Punch-App
