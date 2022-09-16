---
template: post
title: Guide on how to transpose a program from ruby to python - Part 1
slug: guide-how-to-transpose-program-ruby-to-python-part-1
socialImage: /media/screenshot-from-2022-07-13-09-41-23.png
draft: true
date: 2022-09-14T07:32:39.912Z
description: Blog article on how to transpose a program from ruby to python.
category: software
tags:
  - software
  - language
  - ruby
  - python
---
Hello fellow developers,

You love ruby? I know...

You think its a cool language? For sure...

But... it's quite hard to find good old ruby developers in the wild, and maybe you struggle to recruit ruby-ist.

At this point, you first need to transpose your old libraries / programs / web applications from ruby to python.

With this how-to guide, I will explain to you everything you need to know for this type of portage!

Let's start with the major differences and similarities between those two languages.

## Differences and similarities between python and ruby

* Python is a **high level programming language** vs ruby is a **general purpose programming language**.
* Python is **not fully** object oriented whereas ruby is **fully** object oriented.
* Python doesn't have **mixins**, ruby got it.
* They **both have web framework** built on top of them, Django and Flask for Python, Ruby on Rails for Ruby.
* Python is more know and has got a larger range of libraries.
* For the **anonymous functions**, Python only supports lambdas whereas Ruby supports blocks, procs and lambdas.
* For the lambdas, it's a single-line for Python and multi-line for Ruby.
* Ruby supports the **switch/case statement**. It is only available in Python since 3.10.
* The **yield keyword** acts differently:

  * In Python, it returns execution to the scope outside the function’s invocation. External code is responsible for resuming the function.
  * In Ruby, it will execute another function that has been passed as the final argument, then immediately resume.
* **Built-in classes** can't be modified in Python whereas you can do it in Ruby.
* Python supports multiple **inheritance**, only one inheritance possible in Ruby.
* **Tuples** are available in Python.
* They both are high-level languages.
* They both are a **server-side** scripting language.
* Both are used for web applications.
* Both work on **multiple platforms**.
* Both have **clean syntax** and are easily readable.

This list is not exhaustive, however it summarizes well the different points of attention to have when porting a program from ruby to python and vice versa.

## The programming

Let's dive deep into the code, I will show you what's possible in Ruby, and what does it look like in Python. <i class="color-success fas fa-face-smile-wink"></i>

In this first part, I will speak about *classes*, *methods*, *access modifiers* and *hash/dict.*

### Classes

#### Declaration

In Ruby:

```ruby
module MyModule
  class Main
    # ...
  end
end
```

In Python:

```python
class Main:
  # ...
```

#### Initialization

In Ruby:

```ruby
module MyModule
  class Main
    def initialize(var1, var2)
      # ...
    end
  end
end
```

In Python:

```python
class Main:
  def __init__(self, var1, var2):
    # ...
```

#### Attributes and class attributes

Attributes are useful to store data accros our object and during all its lifecycle.\
Class attributes will be more appropriate if you need to store constants, tracking data across all instances or set default values.

In Ruby:

```ruby
module MyModule
  class Main
    attr_reader :var1, :var2 # attributes
    attr_writer :var3 # attributes
    VAR4 = ['Hello World'] # class atribute

    def initialize(var1, var2, var3)
      @var1 = var1
      @var2 = var2
    end

    def set_3(value)
      @var3 = value
    end

    def add_var4(value)
      VAR4.push(value)
    end
  end
end
```

In Python:

```python
class Main:
  VAR4 = ['Hello World'] # class attributes
  
  def __init__(self, var1, var2):
    self.var1 = var1 # attributes
    self.var2 = var2 # attributes
    self.var3 = None # attributes
    
  def set_3(self, value):
    self.var3 = value
    
  def add_var4(self, value):
    Main.VAR4.append(value)
```

#### Access modifiers

Python uses ‘_’ (underscore) symbol to determine the access control for a specific data member or a member function of a class. Access specifiers in Python have an important role to play in securing data from unauthorized access and in preventing it from being exploited.

Ruby prefers to use *keywords* to specify what is private, public or protected.

(If you want a reminder about the access modifiers, check it here: <https://www.toppr.com/guides/computer-science/introduction-to-c/data-types-variables-and-constants/access-modifiers/>)

Let's dive into the code, in Ruby we have for example:

```ruby
module MyModule
  class Main
    # everything below is public
    attr_writer :my_public_variable
    def initialize
      # ...
    end
    
    private # everything below is private
    
    attr_reader :my_private_variable
    def private_method
      # ...
    end
    
    protected # everything below is protected
    
    attr_accesssor :my_protected_variable
    def protected_method
      # ...
    end
  end
end
```

In Python:

```python
class Main:
  
  def __init__(self): # always public
    # ...
    self.my_public_variable = 'Hello'
    self.__my_private_variable = 'Private, sorry!'
    self._my_protected_variable = 'Protected, duh.'
  
  def __private_method(self):
    # ...
    
  def _protected_method(self):
    # ...
```