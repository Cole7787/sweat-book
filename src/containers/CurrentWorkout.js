import React, { Component } from 'react';
import { connect } from 'react-redux';
import LineGradient from 'react-native-linear-gradient';
import Button from 'apsl-react-native-button';
import { Topbar, ExerciseModal, WorkoutList } from '../ui';
import {
    View,
    Text,
    Stylesheet
} from 'react-native';
import { fetchCurrentWorkout, addExerciseToCurrentWorkout } from '../actions/actionCreators';
import { setExerciseModalVisibility } from '../actions/actions';