# qurable-challenge

## 🔨 Configuration

First you need to create `.env` file:

```
REACT_APP_API_PORT=3000
REACT_APP_API_URL=http://localhost:5000/api
```

Start backend

```
Start api from repo:
```

### Start application

```
yarn install
yarn start
```

## 📌 Features

- All items will be shown on the default page (/items), you can search to filter them.

- The related items, on the items details page (/items:id) show items from the same collectors.

## 🔮 Future ideas

- For a better ux, I can implement a useDebounce to show the results (in modal or select) before user types enter, can be clicked directly on found item.

## 🔍 Search

- You can search any items by `id, name or description` typing enter in search bar.
- You can search any items directly, by navigation

## Examples:

```
http://localhost:3000/items/?search=3245
http://localhost:3000/items/?search=Juliette
http://localhost:3000/items/?search=Lore
http://localhost:3000/items/?search=Lorem%20velit
```
