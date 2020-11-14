---
template: project
title: XRAY Covid Classifier with ML
slug: xray-covid-classifier-ml
website: https://github.com/bloodbee/xray_covid_classifier
customer: None
socialImage: /media/person1107_virus_1831.jpeg
draft: true
date: 2020-10-28T16:31:59.916Z
dateCreation: 2020-11-01T00:00:00.000Z
description: Machine learning classifier for XRays of patients affected with
  pneumonia disease.
category: Machine Learning
tags:
  - python
  - tensorflow
  - machine learning
  - covid
  - coronavirus
  - classifier
  - xrayn
---
We are living in a stressful page of our history.

Our grand-parents lived the first and the second world wars, the pig flu, the H1N1 flu and now  we are in the middle of the Covid-19 flu.

All our hopes are towards scientists, to discover a vaccin against this new disease.
As developers, our role is to help them in their research, in anyways.

I started to make this project as one for the [](https://www.epitech.eu/)[EPITECH](https://www.epitech.eu/) school and my master degree.

The goal is to purpose a base to classify XRAY with pneumonia disease from XRAY without it. When the classifier know it's a pneumonia, it can distinguish if it's by a virus or bacteria.\
As you know Covid-19 is a virus that give pneumonia to its host, so this classifier can help to identify it.

No more introduction, I will explain you how I did it, with some basic machine learning models such as VGG and ResNet, Python and TensorFlow.

You can find this project here : <https://github.com/bloodbee/xray_covid_classifier>

**If you want to start from scratch, please follow my lead, and let's go !**

First of all, please download this dataset that contains 3 folders (NORMAL, BACTERIA, VIRUS) that contains themselves the differents folders for train, validation and test data.

Now, open your favorite python development environment, I suggest you [pipenv](https://docs.pipenv.org/) or [conda](https://docs.conda.io/en/latest/), and create a main.py file in a newly created directory.