import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for fetching recommendations
export const fetchRecommendations = createAsyncThunk(
  "gift/fetchRecommendations",
  async ({ age, gender, interests }, thunkAPI) => {
    const chatGptKey = process.env.REACT_APP_OPENAI_API_KEY;
    const client = axios.create({
      headers: {
        Authorization: "Bearer " + chatGptKey,
      },
    });

    const params = {
      prompt: `Generate gift recommendations for a ${age} year old ${gender} who is interested in ${interests.join(
        ", "
      )}`,
      model: "text-davinci-003",
      max_tokens: 80,
      temperature: 0,
    };

    const result = await client.post(
      "https://api.openai.com/v1/completions",
      params
    );
    const outputResult = result.data.choices[0].text.trim();
    const formattedResult = outputResult.substring(outputResult.indexOf("1."));
    return formattedResult.split("\n");
  }
);

export const giftSlice = createSlice({
  name: "gift",
  initialState: {
    gender: "Male",
    age: "1",
    interests: [],
    recommendations: [],
    message: null,
    status: "idle", // for tracking fetch status
    error: null, // for tracking fetch error
  },
  reducers: {
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
    addInterest: (state, action) => {
      state.interests.push(action.payload);
    },
    removeInterest: (state, action) => {
      state.interests = state.interests.filter((_, i) => i !== action.payload);
    },
    clearInterests: (state) => {
      state.interests = [];
    },
    clearRecommendations: (state) => {
      state.recommendations = [];
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecommendations.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRecommendations.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.recommendations = action.payload;
      })
      .addCase(fetchRecommendations.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {
  setGender,
  setAge,
  addInterest,
  removeInterest,
  clearInterests,
  clearRecommendations,
  setMessage,
  clearMessage,
} = giftSlice.actions;

export default giftSlice.reducer;
